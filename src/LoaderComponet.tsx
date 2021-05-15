import loadGif from './img/loading-buffering.gif'
const LoaderContent: React.FC = () => {
    return (
        <div style={{ position: 'absolute', top: 220 }}>
            <img src={loadGif} alt="" />
        </div>
    )
}

export default LoaderContent