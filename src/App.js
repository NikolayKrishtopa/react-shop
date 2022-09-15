import api from './utils/api'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Shop from './components/Shop'
import Search from './components/Search'
import Preloader from './components/Preloader'
import TypeFilter from './components/TypeFilter'
import ItemsPerPageMenu from './components/ItemsPerPageMenu'

function App() {
  const [initialItems, setInitialItems] = useState([])
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [searchSubmitted, setSearchSubmitted] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [pageQty, setPageQty] = useState(1)
  const [types, setTypes] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    {
      setIsLoading(true)
      api
        .getShopItemsList()
        .then((res) => {
          setInitialItems(res.shop)
          setTypes(Array.from(new Set(res.shop.map((e) => e.mainType))))
        })

        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    const filteredItems = initialItems
      .filter((e) => (category ? e.mainType === category : e))
      .filter((e) =>
        searchSubmitted
          ? e.displayName.toLowerCase().includes(searchSubmitted.toLowerCase())
          : e
      )
    setItems(filteredItems)
    setPageQty(
      Math.ceil(itemsPerPage ? filteredItems.length / itemsPerPage : 1)
    )
  }, [category, initialItems, searchSubmitted, itemsPerPage])

  function handleChangeCategory(category) {
    setCategory(category)
    setPage(1)
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmitSearch() {
    setSearchSubmitted(search)
    setPage(1)
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="page">
          <Header />
          <Search
            search={search}
            onSearchChange={handleSearchChange}
            onSubmit={handleSubmitSearch}
          />
          <div class="navBlock">
            <TypeFilter
              value={category}
              onChangeValue={handleChangeCategory}
              types={types}
            />
            <ItemsPerPageMenu value={itemsPerPage} onChange={setItemsPerPage} />
          </div>
          <Shop
            items={items}
            category={category}
            pageQty={pageQty}
            page={page}
            onChangePage={setPage}
            itemsPerPage={itemsPerPage}
          />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
