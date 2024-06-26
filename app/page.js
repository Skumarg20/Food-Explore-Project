import Link from "next/link";
import pagecss from './page.module.css'
import ImageSlideShow from "@/components/imageSlideShow/imageslideshow";


export default function Home() {
  return (
    <>
    <header className={pagecss.header}>
     <div className={pagecss.slideshow}>
      <ImageSlideShow/>
     </div>
     <div>
      <div className={pagecss}>
        <h1>Next Level food for Next Level Foodies</h1>
        <p>Taste & share food from all over the world.</p>

      </div>
      <div className={pagecss.cta}>
        <Link href='/community'>Join the Community</Link>
        <Link href='/meals'>Explore Meals</Link>
      </div>
     </div>
     
    </header>
    <main>
      <section className={pagecss.section}>
      <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
      </section>
      <section className={pagecss.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
   
    </>
  );
}
