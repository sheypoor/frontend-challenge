declare interface IHierarchyNonGeneric {
  id: string
  parentResourceId?: string
  children?: IHierarchyNonGeneric[]
  hasChildren?: boolean
}

declare interface IHierarchy<
  T extends IHierarchyNonGeneric = IHierarchyNonGeneric
> extends IHierarchyNonGeneric {
  children: T[]
}

declare interface INavItem extends IHierarchy<INavItem> {
  iconType: string
  iconUri: string
  label: string
  path?: string
}
