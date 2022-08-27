
import phoneBanner from './iphone banner.jpg'

export default function HomePage() {
    return (
        <>
            <h1 class='pageTitle'> Welcome </h1>
            <img src = {phoneBanner}  className="bannerImage"  ></img>
        </>
    )
}