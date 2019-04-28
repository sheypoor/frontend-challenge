const env = {
  dev: {
    PROTOCOL: 'http://',
    MEDIA_URL: 'i.pravatar.cc/'
  },
  prod: {
    PROTOCOL: 'https://',
    MEDIA_URL: `i.pravatar.cc/`
  }
}

const config = env['prod']

export default config
