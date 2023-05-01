import '../../utils/style/banner.css'

function Banner(props){
  return (
    <div className={props.bannerClass}>
        <div className="container-background"/>
        <h1 className="container-banner-title">{props.title}</h1>
    </div>
  )
}

export default Banner