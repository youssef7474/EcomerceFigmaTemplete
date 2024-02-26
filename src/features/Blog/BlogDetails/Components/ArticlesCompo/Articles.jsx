import React from 'react'
import styles from "./Articles.module.css"
const Articles = () => {
  return (
    <div style={{marginTop:"50px"}}>
        <div className="conatnier">
            <div className={styles.card}>
                <h1>Nail the Classics</h1>
                <p>Do pure winter chic with a classic cashmere white sweater. Made in the softest cashmere, it’s a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make sure you keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.</p>
            </div>
            <div className={styles.card}>
                <h1>Monochromatic Magic</h1>
                <p>Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have to break the bank to create a super chic top-to-toe look. Pair classic corduroy pants in a modern wide-legged silhouette with a relaxed Oxford style white shirt for a mix-and-match texture play. Extra points if you add a white blazer, cardigan, or sweater. Accessorize with subtle metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.</p>
            </div>
            <div className={styles.card}>
            <h1>Keep Warm in White</h1>
            <p>Stay warm all winter long with a white puffer jacket puffer jacket. This durable, cold weather jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit for an easy elegant look.</p>
        </div>
        </div>
    </div>
  )
}

export default Articles
