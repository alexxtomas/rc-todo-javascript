import Icon, { ICON_VARIANTS_ENUM } from '@components/Icon/Icon'

const SpaceCard = ({ name, priority, createdAt, tasks }) => {
  return `
      <article class='rcSpaceCard'>
        <header>
        <h3>${name}</h3>
        <button> ${Icon({
          variant: ICON_VARIANTS_ENUM.EDIT
        })} </button>
        </header>

        <section >
        <button>
          ${Icon({ variant: ICON_VARIANTS_ENUM.FLAG })}
        </button>
        </section>
        
      </article>
    `
}

export default SpaceCard
