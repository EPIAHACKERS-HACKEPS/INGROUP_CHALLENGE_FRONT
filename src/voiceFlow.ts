interface CustomElement extends HTMLElement {
  src?: string
  type?: string
}

const voiceFlow = (d: Document, t: string): void => {
  const v: CustomElement = d.createElement(t)
  const s = d.getElementsByTagName(t)[0]

  v.onload = () => {
    window.voiceflow.chat.load({
      verify: { projectID: '6561dedafc460970ea49523f' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production'
    })
  }

  v.src = 'https://cdn.voiceflow.com/widget/bundle.mjs'
  v.type = 'text/javascript'
  s.parentNode?.insertBefore(v, s)
}

voiceFlow(document, 'script')
