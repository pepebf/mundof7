<script charset="utf-8" src="http://widgets.twimg.com/j/2/widget.js"></script>
<script>
new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 11,
  interval: 30000,
  width: 250,
  height: 300,
  theme: {
    shell: {
      background: '#e869e8',
      color: '#4b65e8'
    },
    tweets: {
      background: '#ed9fed',
      color: '#ffffff',
      links: '#41f0b0'
    }
  },
  features: {
    scrollbar: true,
    loop: false,
    live: false,
    behavior: 'all'
  }
}).render().setUser('Internastoria').start();
</script>
 