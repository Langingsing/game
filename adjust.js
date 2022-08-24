setTimeout(() => {
    const defaultSize = {w: 1152, h: 768}

    const g = document.getElementById('GameDiv')
        , {w, h} = defaultSize
        , {min} = Math

    const adjust = () => {
        const {innerWidth, innerHeight} = window

        g.style['max-height'] = min(h, innerHeight) + 'px'
        g.style['max-width'] = min(w, innerWidth) + 'px'
        let n = g
        while (n) {
            n.style.width = '100%'
            n.style.height = '100%'

            n = n.children[0]
        }
    }

    g.style.width = '100%'
    g.style.height = '100%'

    adjust()
    window.addEventListener('resize', adjust)
}, 1000)