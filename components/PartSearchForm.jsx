'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import Select from '@/components/Select'

const PartSearchForm = () => {
    const [searchBar, setSearchBar] = useState('')
    const [partType, setPartType] = useState('ALL')
    const router = useRouter()
    const items = ['ALL', 'Brakes', 'Seats', 'Steering', 'Suspension', 'Tires', 'Wheels'];

    const handleSelect = (selectedItem) => {
        setPartType(selectedItem)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        if (searchBar === '' && partType === 'ALL') {
            console.log('Searching for:', searchBar)
            router.push(`/parts`)
        } else {
            const searchQuery = `?search=${searchBar}&partType=${partType}`
            router.push(`/parts/search-results${searchQuery}`)
        }
        console.log('Searching for:', partType)

      }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
                    <label htmlFor="search-parts" className="sr-only">
                        Search Parts
                    </label>
                    <input
                        type="text"
                        id="search-parts"
                        placeholder="Search (e.g., brake pads, oil filter)"
                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                        onChange={(e) => setSearchBar(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-2/5 md:pl-2">
                    <label htmlFor="part-type" className="sr-only">
                        Part Type
                    </label>
                    <Select items={items} onSelect={handleSelect}/>
                </div>
                <Button>Search</Button>
            </form>
        </div>
    )
}

export default PartSearchForm