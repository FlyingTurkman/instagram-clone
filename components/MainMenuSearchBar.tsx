'use client'

import { IoClose } from "react-icons/io5"
import { FormEvent, useRef, useState, useEffect, Dispatch, SetStateAction } from "react"










export default function MainMenuSearchBar() {

    const formRef = useRef<HTMLFormElement>(null)

    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        if (searchTerm.trim().length != 0) {
            formSubmit()
        }
    }, [searchTerm])
    return(
        <form ref={formRef} className="bg-background-secondary p-2 pr-6 rounded-md mt-10 mb-2 relative" onSubmit={((e: FormEvent) => formSubmit(e))}>
            <input 
            className="bg-transparent"
            placeholder="Search"
            autoFocus
            onChange={((e) => setSearchTerm(e.target.value))}
            />
            <button type="button" className="text-sm bg-border rounded-full text-background absolute top-1/2 -translate-y-1/2 right-2" onClick={clearForm}>
                <IoClose/>
            </button>
        </form>
    )

    function clearForm() {
        if (formRef && formRef.current) {
            formRef.current.reset()
        }
    }

    async function formSubmit(e?: FormEvent) {

        if (e) {
            e.preventDefault()
        }

        if (searchTerm.trim().length != 0) {
            //TODO: Search function
        }
    }
}