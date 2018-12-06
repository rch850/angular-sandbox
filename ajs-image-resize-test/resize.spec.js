describe('resize', () => {

  // system under test
  beforeEach(() => {
    class ImageUtils {
      constructor($q) {
        this.$q = $q
      }

      resize(url) {
        return this.$q((resolve, reject) => {
          let image = new Image()
          image.onload = () => {
            // console.log('loaded', image.width, image.height)
            resolve('abc')
          }
          image.src = url
        })
      }

      simpleEcho(text) {
        return this.$q((resolve, reject) => {
          resolve(text)
        })
      }
    }

    angular.module('myapp', []).service('ImageUtils', ImageUtils)
  })

  beforeEach(module('myapp'))

  let ImageUtils, $rootScope
  beforeEach(inject(($injector) => {
    ImageUtils = $injector.get('ImageUtils')
    $rootScope = $injector.get('$rootScope')
  }))

  it('resize', (done) => {
    let canvas = document.createElement('canvas')
    canvas.width = canvas.height = 32
    let url = canvas.toDataURL()

    ImageUtils.resize(url).then(result => {
      expect(result).toEqual('abc')
      done()
    })
    $rootScope.$apply()

    // THIS IS IMPORTANT
    setTimeout(() => {
      $rootScope.$apply()
    })
  })

  it('simpleEcho', (done) => {
    ImageUtils.simpleEcho('abc').then(result => {
      expect(result).toEqual('abc')
      done()
    })
    $rootScope.$apply()
  })
})
