import s from './Logo.module.css'
function Logo() {
    return(
        <a className={s.logoWrapper}>
            <svg className={s.logoImg}>
            <use href="/svg/symbol-defs.svg#LSLogo"></use>
          </svg>
            <h2 className={s.logo}>Light Street</h2>
        </a>
    )
}
export default Logo;