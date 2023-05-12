import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Hélcio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Hélcio Humberto sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor  Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Quero compartilhar com vocês uma história que reflete minha paixão pela tecnologia e meu caminho como dev.
            </p>
            <p className={styles.paragrafo}>
                Desde criança, fui fascinado pelo mundo da tecnologia. Sempre que via um computador, meus olhos brilhavam e minha mente se enchia de curiosidade. Durante minha infância, tive a sorte de ter contato com o desenvolvimento web. Lembro-me vividamente das aulas em que aprendi os conceitos básicos de HTML e CSS. Aquelas linhas de código ganhavam vida diante dos meus olhos, e eu sentia uma conexão única com a programação.
            </p>
            <p className={styles.paragrafo}>
                Foi então que, em 2022, decidi dar um passo além e iniciar meus estudos como programador. Matriculei-me em um curso especializado em desenvolvimento web e mergulhei de cabeça no mundo da programação. Ali, eu estava diante de uma infinidade de possibilidades, com JavaScript como minha principal ferramenta.
            </p>
            <p className={styles.paragrafo}>
                A medida que aprendia os fundamentos e a lógica da programação, também me encantava com o poder do JavaScript. Aquela linguagem dinâmica e versátil tornou-se a minha favorita, permitindo-me criar interações incríveis e trazer vida aos projetos.

            </p>
            <p className={styles.paragrafo}>
                A jornada até aqui não foi fácil, mas cada obstáculo enfrentado me ajudou a crescer e a me tornar um profissional melhor. A tecnologia continua a evoluir rapidamente, e estou constantemente me atualizando para acompanhar as últimas tendências e ferramentas.
            </p>
        </PostModelo>
    )
}