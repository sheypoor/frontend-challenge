import { FC, useState } from 'react'
import LoginModal from '@components/login/LoginModal'
import profileStore from '../../../store/profileStore'
import Button from '@components/button/Button'
const UserProfile: FC<{ className?: string }> = ({ className }) => {
  const { avatar, authenticated } = profileStore(state => state)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={className}>
      {authenticated ? (
        <div className={className}>
          <img width={40} className="rounded-full" src={avatar} />
        </div>
      ) : (
        <Button title={'Sign in'} onClickAction={() => setIsOpen(true)} />
      )}
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default UserProfile
