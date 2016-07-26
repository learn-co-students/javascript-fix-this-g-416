describe('index', function() {
  describe('cook functions', function() {

    let update
    before(function() {
      update = updateStatus.bind(document.getElementById("pie"))
    })

    describe('decorate', function() {
      it('it applies serve with correct args', function(done) {
        this.timeout(5000)
        var serveSpy = expect.spyOn(serve, "apply")
        cake.decorate(update)

        setTimeout(function() {
          expect(serveSpy).toHaveBeenCalledWith(cake, ["Happy Eating!", cake.customer])
          done()
        }, 3000)
      })
    })

    describe('cool', function() {
      it('calls the update function', function() {
        cool.call(pie, update)
        expect(document.getElementById("pie").getElementsByClassName("status")[0].innerText).toMatch(/cool!/)
      })

      it('calls decorate with context', function(done) {
        this.timeout(5000)
        pie.decorate = cake.decorate.bind(pie)
        var decorateSpy = expect.spyOn(pie, "decorate")
        cool.call(pie, update)
        setTimeout(function() {
          expect(decorateSpy).toHaveBeenCalledWith(update)
          decorateSpy.restore()
          done()
        }, 3000)
      })
    })

    describe('bake', function() {
      it('calls the update function', function() {
        bake.call(pie, update)
        expect(document.getElementById("pie").getElementsByClassName("status")[0].innerText).toMatch(/Baking at/)
      })

      it('calls cool with context', function(done) {
        this.timeout(5000)
        var coolSpy = expect.spyOn(cool, "call")
        bake.call(pie, update)
        setTimeout(function() {
          expect(coolSpy).toHaveBeenCalledWith(pie, update)
          coolSpy.restore()
          done()
        }, 3000)
      })

    })

    describe('mix', function() {
      it('calls the update function', function() {
        mix.call(pie, update)
        expect(document.getElementById("pie").getElementsByClassName("status")[0].innerText).toMatch(/Mixing/)
      })

      it('calls bake with context', function(done) {
        this.timeout(5000)
        var bakeSpy = expect.spyOn(bake, "call")
        mix.call(pie, update)
        setTimeout(function() {
          expect(bakeSpy).toHaveBeenCalledWith(pie, update)
          bakeSpy.restore()
          done()
        }, 3000)
      })

    })
  })

  describe('makeDessert', function() {
    it('calls the right function', function() {
      var pieNode = document.getElementById("pie")
      var cakeNode = document.getElementById("cake")
      var makeCakeSpy = expect.spyOn(makeCake, "call")
      var makePieSpy = expect.spyOn(makePie, "call")
      makeDessert.call(pieNode.getElementsByClassName("js-make")[0])
      makeDessert.call(cakeNode.getElementsByClassName("js-make")[0])
      expect(makePieSpy).toHaveBeenCalledWith(pieNode)
      expect(makeCakeSpy).toHaveBeenCalledWith(cakeNode)
      makeCakeSpy.restore()
      makePieSpy.restore()
    })
  })

  describe('cake', function() {
    it('has a decorate function', function() {
      expect(cake.decorate).toExist()
    })
  })

  describe('pie', function() {
    it('borrows the decorate function from cake', function() {
      var spy = expect.spyOn(cake.decorate, "bind").andCallThrough()
      makePie.call(document.getElementById("pie"))
      expect(pie.decorate).toExist()
      expect(spy).toHaveBeenCalledWith(pie)
    })
  })

  describe('makePie', () => {
    it('binds an update function', () => {
      var spy = expect.spyOn(updateStatus, "bind").andCallThrough()
      var node = document.getElementById("pie")
      makePie.call(node)
      expect(spy).toHaveBeenCalledWith(node)
      spy.restore()
    })

    it('calls mix with context', () => {
      var update = updateStatus.bind(document.getElementById("pie"))
      var spy = expect.spyOn(mix, "call").andCallThrough()
      var node = document.getElementById("pie")
      makePie.call(node)
      expect(spy).toHaveBeenCalledWith(pie, update)
      spy.restore()
    })
  })

  describe('makeCake', () => {
    it('binds an update function', () => {
      var spy = expect.spyOn(updateStatus, "bind").andCallThrough()
      var node = document.getElementById("cake")
      makeCake.call(node)
      expect(spy).toHaveBeenCalledWith(node)
      spy.restore()
    })
    it('calls mix with context', () => {
      var update = updateStatus.bind(document.getElementById("cake"))
      var spy = expect.spyOn(mix, "call").andCallThrough()
      var node = document.getElementById("cake")
      makeCake.call(node)
      expect(spy).toHaveBeenCalledWith(cake, update)
      spy.restore()
    })
  })

})
