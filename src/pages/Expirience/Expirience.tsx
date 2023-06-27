import { proyects } from '../../data/data'
import styles from './Expirience.module.css'
import github from './githubLogo.svg'
import redirect from './redirect.svg'
export const Expirience: React.FC<{}> = () => {
  return (

    <main className={styles.gridContainer}>
      {proyects.map(({ description, link, name, img, technologys }) =>
        <div key={name} className={styles.box}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <a href='http://www.google.com' target='_blank' className={styles.backgroundContainer} rel='noreferrer'>
            <img src={img} alt={name} className={styles.background} />
            <div className={styles.over}>
              <img src={redirect} alt='' />
            </div>
          </a>

          <div className={styles.boxContent}>
            <div className={styles.tagContainer}>
              {technologys.map(tecnology => (
                <span key={tecnology} className={styles.tag}> {tecnology} </span>
              ))}
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem obcaecati, eveniet cumque vel harum corporis quidem nobis dignissimos optio suscipit iure id aspernatur labore numquam earum, eligendi, nihil illo.</p>
            <a href={link} target='_blank' rel='noreferrer'><button className={styles.button}> <img src={github} alt='' /> ver repositorio</button></a>
          </div>

        </div>
      )}

    </main>
  )
}
