import KO from 'knockout'
import {createUser} from '../sdk'

const createElem = (elem) => document.createElement(elem)
const setAttr = (elem, attr, val) => {
  elem.setAttribute(attr, val)
  return elem
}
const finalStep = 1
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const init = () => {
  function AppViewModel() {
    var self = this
    self.name = KO.observable("")
    self.age = KO.observable("")
    self.email = KO.observable("")
    self.newsletter = KO.observable("")
    self.currentStep = KO.observable(0)
    self.showErrors = KO.observable(false)
    self.creatingUser = KO.observable(false)
    self.doneCreatingUser = KO.observable(false)
    self.newsletterOptions = KO.observableArray(['daily', 'weekly', 'monthly'])
    self.submitText = KO.observable("Next")
    self.fieldsArray = KO.observableArray([
      KO.observable({
        type: 'text',
        step: 0,
        visible: true,
        selector: 'name',
        placeholder: 'John doe',
        validateField: (val, fieldObservable) => {
          fieldObservable.errors([])
          if (val === '') {
            let msg = 'this field is required.'
            if (fieldObservable.errors.indexOf(msg) === -1)
              fieldObservable.errors.push(msg)
            return false
          }
          return true
        },
        errors: KO.observableArray([])
      }),
      KO.observable({
        type: 'number',
        step: 0,
        visible: true,
        selector: 'age',
        errors: KO.observableArray([]),
        placeholder: 'old enough',
        validateField: (val, fieldObservable) => {
          fieldObservable.errors([])
          if (val === '') {
            let msg = 'this field is required.'
            if (fieldObservable.errors.indexOf(msg) === -1)
              fieldObservable.errors.push(msg)
            return false
          } else if (val <= 0) {
            let msg = 'value should be positive'
            if (fieldObservable.errors.indexOf(msg) === -1)
              fieldObservable.errors.push(msg)
            return false
          }
          return true
        }
      }),
      KO.observable({
        type: 'email',
        step: 1,
        visible: false,
        selector: 'email',
        validateField: (val, fieldObservable) => {
          fieldObservable.errors([])
          if (val === '') {
            let msg = 'this field is required.'
            if (fieldObservable.errors.indexOf(msg) === -1)
              fieldObservable.errors.push(msg)
            return false
          } else if (!emailRegex.test(val.toLowerCase())) {
            let msg = 'email format is incorrect.'
            if (fieldObservable.errors.indexOf(msg) === -1)
              fieldObservable.errors.push(msg)
            return false
          }
          return true
        },
        errors: KO.observableArray([])
      }),
      KO.observable({
        type: 'select',
        selector: 'newsletter',
        step: 1,
        visible: false,
        errors: KO.observableArray([]),
        options: self.newsletterOptions(),
        validateField: (val, fieldObservable) => {
          fieldObservable.errors([])
          if (typeof(val) === typeof(undefined)) {
            let msg = 'this field is required.'
            if (fieldObservable.errors.indexOf(msg) === -1)
              fieldObservable.errors.push(msg)
            return false
          }
          return true
        }
      })
    ])
    self.currentStep.subscribe((newVal) => {
      self.fieldsArray().map(item => {
        let i = item()
        i = {
          ...i,
          visible: i.step == newVal
        }
        return i
      })
    });
    self.isVisible = (step) => initKO.currentStep() === step
    self.isFormVisible = (step) => !self.creatingUser() && !self.doneCreatingUser()

    self.validationMessage = (selector) => self.fieldsArray().find(f => f().selector === selector)().errors().join(' ')

    self.hasError = (selector) => self.fieldsArray().find(f => f().selector === selector)().errors().length

    self.getOptions = (field) =>  initKO.fieldsArray().find(f => f() == field).options

    self.submitForm = () => {
      let currentStep = initKO.currentStep()
      let fields = initKO.fieldsArray().filter(item => item().step == currentStep)
      let error = false
      for (var i = 0; i < fields.length; i++) {
        let field = fields[i]()
        if (field.validateField && !field.validateField(self[field.selector](), field))
          error = true
      }
      if (!error) {
        if (currentStep < finalStep) {
          initKO.submitText('Submit')
          initKO.showErrors(false)
          initKO.currentStep(initKO.currentStep() + 1)
        } else {
          const {name, age, newsletter, email} = initKO
          const user = {
            name: name(),
            age: age(),
            newsletter: newsletter(),
            email: email()
          }
          initKO.creatingUser(true)
          createUser(user).then(res => {
            initKO.doneCreatingUser(true)
            console.log(res)
          })

        }
      } else
        initKO.showErrors(true)
    }
  }

  let initKO = new AppViewModel();
  let form = createElem('form')
    setAttr(form, 'data-bind', "submit: submitForm, visible: isFormVisible")

    let input,
      holder,
      inputName,
      errorHolder
    let i
    for (i = 0; i < initKO.fieldsArray().length; i++) {
      let field = initKO.fieldsArray()[i]()
      // console.log(field)

      holder = createElem('div')
      holder.classList.add('field')
      setAttr(holder, 'data-bind', `visible: isVisible(${field.step})`)

      inputName = createElem('span')
      inputName.innerHTML = field.selector

      if (field.type === 'select') {
        input = createElem('select')
        setAttr(input, 'data-bind', `options: newsletterOptions,value: newsletter,optionsCaption: 'Choose...'`)
      } else {
        input = createElem('input')
        setAttr(input, 'data-bind', `value: ${field.selector}`)
      }
      setAttr(input, 'type', field.type)
      setAttr(input, 'placeholder', field.placeholder || field.selector)

      errorHolder = createElem('div')
      errorHolder.classList.add('error')
      setAttr(errorHolder, 'data-bind', `visible: hasError('${field.selector}'), text: validationMessage('${field.selector}')`)

      holder.appendChild(inputName)
      holder.appendChild(input)
      holder.appendChild(errorHolder)
      form.appendChild(holder)
    }

    let submitButton = createElem('input')
    setAttr(submitButton, 'data-bind', `click: submitForm, value: submitText, disabled: !creatingUser`)
    setAttr(submitButton, 'type', "submit")
    form.appendChild(submitButton)

    document.body.appendChild(form)
    KO.applyBindings(initKO)
  }

  init()
