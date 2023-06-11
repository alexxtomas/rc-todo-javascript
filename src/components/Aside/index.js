import ListAside from './components/ListAside'

const ASIDE_VARIANTS = {
  LIST: ListAside
}

export const DIALOG_VARIANTS_ENUM = {
  LIST: 'LIST'
}

const Aside = ({ variant, ...props }) => {
  return ASIDE_VARIANTS[variant](props)
}

export default Aside
