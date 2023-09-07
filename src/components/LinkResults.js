import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function LinkResults({inputValue}) {
    const [shortenenedLink, setShortenedLink] = useState("");
    const [linkList, setLinkList] = useState([])

    let linkId = 0;

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchShortCode = async () => {
        try {
            setLoading(true)
            const result = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenedLink(result.data.result.full_short_link)
            setError("")
        } catch (err) {
            setError(err.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchShortCode();
        }
    }, [inputValue])

    useEffect(() => {      
        if (shortenenedLink != "") {
            setLinkList([
                ...linkList,
                {id: linkId++, url: shortenenedLink}
            ])
        }  
    }, [shortenenedLink])

    return (
    <>
    {loading ? <p>Loading ...</p> :
        <>
            {error && (<p className='text-red-500 text-sm'>{error}</p>)}
            {shortenenedLink && (
                <div className='flex flex-col mt-12 gap-2'>
                    {linkList.map((link, i) => (
                        <div key={i} className='flex gap-2'>
                            <p className='rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'>{link.url}</p>
                            <CopyToClipboard text={link.url}>
                                <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Copy to Clipboard</button>
                            </CopyToClipboard>
                        </div>
                    ))}
                </div>
            )}
        </>
    }
    </>
  )
}
