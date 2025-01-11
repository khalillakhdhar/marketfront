# modules:
# main modules:
## auth module:
  -login component
  -register component
## admin module:
  ### admin:
  -dashboard (home)
  -profile
  -management: (user,product, order)
  ### stats (core):
  -users stats
  -sell stats
  -products stats
## client module:
  -home page (product)
  -search page (categories)
  -contact admins
  ### profile module:
  -user profile
  -history (orders)
  -orders (current)
## shared 
  ### components:
    -footer
  ### interfaces & services:
  -user
  -commande
  -payment
  -role
  -auth
  -categorie
  -product
  ### particular services:
  -stats services
  -authgard
  -interceptor 


