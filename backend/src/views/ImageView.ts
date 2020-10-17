import Image from '../models/Image'

const imageView = {
  render(image: Image) {
    return {
      id: image.id,
      url: process.env.APP_UPLOADS_URL + '/' + image.path
    }
  },

  renderMany(images: Image[]) {
    ;``
    return images.map(image => this.render(image))
  }
}

export default imageView
