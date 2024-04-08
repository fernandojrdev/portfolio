<template>
    <div class="linktree-container">
        <div class="linktree-wrapper">
            <img src="./components/assets/imgs/pfp.jpg" alt="Profile Picture" class="linktree-img">
            <h2 class="linktree-name">
                Fernando Jr.
            </h2>
            <p class="linktree-dev">
                Web Developer
            </p>
            <p class="linktree-location">
                Campinas - SP
                <img src="./components/assets/imgs/brasil.svg" alt="Brazil Flag">
            </p>
            <div class="linktree-links">
                <a href="https://www.linkedin.com/in/feferjr/" target="_blank">
                    <img src="./components/assets/imgs/linkedin.svg" alt="Linkedin Logo" class="linktree-link">
                </a>
                <a href="https://fernandojrdev.github.io/portfolio/" target="_blank">
                    <img src="./components/assets/imgs/website.svg" alt="Website Logo" class="linktree-link">
                </a>
                <a href="https://github.com/fernandojrdev" target="_blank">
                    <img src="./components/assets/imgs/github.svg" alt="github Logo" class="linktree-link">
                </a>
                <a href="https://wa.me/5519983162109" target="_blank">
                    <img src="./components/assets/imgs/whatsapp.svg" alt="WhatsApp Logo" class="linktree-link">
                </a>
                <a href="mailto:fernandomtcjunior@gmail.com" target="_blank">
                    <img src="./components/assets/imgs/email.svg" alt="Email Logo" class="linktree-link">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.linktree-container  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 2rem;
    color: #f8f8f8;
}
.linktree-wrapper  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    height: 100%;
    min-height: 500px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 1rem;
    background: rgba(0, 0, 0, .35);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
.linktree-img  {
    width: 100%;
    max-width: 150px;
    height: 100%;
    object-fit: contain;
    border-radius: 100%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, .3);
}
.linktree-dev {
    margin-top: -1.75rem;
    font-weight: 300;
    color: #f2f2f2;
}
.linktree-location  {
    display: flex;
    padding: .5rem 1rem;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    border-radius: 1rem;
    background-color: rgba(45, 45, 51, 0.623);
}
.linktree-location img {
    width: 35px;
    object-fit: contain;
}
.linktree-links  {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: .5rem;
}
.linktree-link  {
    height: 100%;
    width: 100%;
    max-width: 45px;
    object-fit: contain;
    border-radius: 100%;
    transition: ease-in-out 300ms;
    cursor: pointer;
}
.linktree-link:hover  {
    transform: scale(1.3);
    margin: 0 1rem;
}
@media (max-width: 768px) {
    .linktree-container {
        min-height: 100dvh;
        overflow: hidden;
    }
    .linktree-wrapper {
        min-width: 300px;
    }
    .linktree-links {
        gap: 1rem;
    }
    .linktree-link  {
        width: 40px;
    }
    .linktree-link:hover  {
        transform: scale(1);
        margin: 0;
    } 
}
</style>