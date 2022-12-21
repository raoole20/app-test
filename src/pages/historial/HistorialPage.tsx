import { IonCard, IonSpinner } from "@ionic/react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import AppContainer from "../../app/components/AppContainer"
import AppSpiner from "../../app/components/AppSpiner"
import { fetchHistory } from "../../app/store/slices"

const HistorialPage = () => {
  const distpatch = useDispatch()
  const history = useSelector((state: any) => state.player.history)
  console.log(history)

  /** 
   * TODO
   * Se realiza la request para obtener el historial
   */
  useEffect(() => {
    distpatch(fetchHistory())
  }, [distpatch])

  if (!history.status || history.status !== "complite") {
    return <AppSpiner url='/' />
  }

  return (
    <AppContainer url={'/'}>
      <div className="container history-app">
        <header>
          <h5>History</h5>
        </header>

        <section>

          {history?.data?.map((item: any, index: any) => (

            <div className="history-row-element">

              <div className="history-description">
                <h6>{item.name}</h6>
                <span>{item.date}</span>
              </div>


              <div >
                <Link to={`/history/player/${item.id}`} className='history-ver-mas'>
                  <IonCard color="light" style={{ margin: 0 }} className='history-card'>
                    <span>Ver</span>
                  </IonCard>
                </Link>
              </div>
            </div>

          ))
          }
        </section>
      </div>
    </AppContainer>
  )
}

export default HistorialPage
