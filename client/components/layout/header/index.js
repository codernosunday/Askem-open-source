import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import useComponentVisible from '../../../hooks/useComponentVisible'
import useWindowSize from '../../../hooks/useWindowSize'
import CONST from '../../../constants'
import ModalContext from '../../../store/modal'
import { AuthContext } from '../../../store/auth'

import Button from '../../button'
import NavigationDropdown from '../../navigation-dropdown'
import { Menu, Close, Logo } from '../../icons'

import styles from './header.module.css'

const Header = ({ className, ...props }) => {
  const { handleComponentVisible } = useContext(ModalContext)
  const { isAuthenticated, authState, logout } = useContext(AuthContext)

  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <div ref={toggleRef} className={styles.menuContainer}>
          <Button
            className={styles.menu}
            onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
          >
            {isComponentVisible ? <Close /> : <Menu />}
          </Button>
        </div>
        <Button className={styles.logo} href="/">
          <Logo />
          <p>
            <span>Askem</span>
          </p>
        </Button>
        <div style={{ flex: 1 }}></div>

        {isAuthenticated() ? (
          <div className={styles.userInfo}>
            <p>
              Welcome{' '}
              <Link
                href="/users/[user]"
                as={`/users/${authState.userInfo.username}`}
              >
                <a>{authState.userInfo.username}!</a>
              </Link>
            </p>
            <Button
              className={styles.btnlogout} // Đảm bảo className được cập nhật
              primary
              onClick={() => logout()}
            >
              <span>Log Out</span> {/* Đặt nội dung trong một span để áp dụng kiểu */}
            </Button>
          </div>
        ) : (
          <>
            <Button
              className={styles.btnlogout}
              secondary
              onClick={() => handleComponentVisible(true, 'login')}
            >
              Log in
            </Button>
            <Button
              className={styles.btnlogout}
              primary
              onClick={() => handleComponentVisible(true, 'signup')}
            >
              Sign up
            </Button>
          </>
        )}
      </div>
      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}
export default Header
