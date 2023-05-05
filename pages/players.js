import PlayersGrid from "../components/PlayersGrid"

import styles from "../styles/Players.module.css"

export default function Players() {

    return (
        <div className={styles.container}>
            <div className={styles.playersInfo}>
                <h1>View All your Players</h1>
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nibh a felis elementum facilisis. Curabitur eu tincidunt elit. Aliquam facilisis porta placerat. Donec ut mollis sapien. Aenean porttitor elit ipsum, in condimentum sem ornare non. Nullam vitae porttitor nulla, sed maximus lacus. Sed at porta arcu. Aliquam vestibulum, quam id fermentum mollis, tortor velit venenatis sapien, in porta lorem lorem ac leo. In ac ante convallis, pulvinar enim et, consequat arcu. Integer sit amet mi fringilla, semper urna et, suscipit quam. Duis egestas est nisl, sed sagittis justo lobortis vel. Maecenas eu nibh sed neque finibus egestas condimentum sit amet ligula. Maecenas sit amet est non dolor bibendum bibendum. In eu facilisis felis, nec consequat magna. Vivamus id molestie ante, eget interdum quam.

                </p>
            </div>
            <hr className={styles.horizontalLine}/>
            <PlayersGrid />
        </div>
    )
}