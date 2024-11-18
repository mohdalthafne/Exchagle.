"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import CurrencySelector from './CurrencySelector'

const ExchangeBox = () => {

    const [defaultAmount, setDefaultMount] = useState('1')
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('INR')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")

    const exchangeBtn = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    // API Datas
    const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_API_KEY
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${defaultAmount}`

    const getExchangeRate = async () => {
        if (loading) return
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            if (!res.ok) throw Error(`API request failed with status ${res.status}`)
            if (!defaultAmount) throw new Error('Invalid Amount')
            const data = await res.json()
            setResult(`${defaultAmount} ${fromCurrency} = ${data.conversion_result} ${toCurrency}`)
        } catch (error) {
            setResult("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log(API_URL)
    }, [])

    return (
        <>
            <div className='mx-auto max-w-[310px] sm:max-w-sm p-4 bg-[#242526] rounded-xl select-none'>
                <Link href="/"><h1 className='text-2xl sm:text-3xl select-none font-normal underline decoration-[#f79f1f] decoration-2'>E<span className='text-[#f79f1f] underline decoration-white decoration-2'>xc</span>hagl<span className='text-[#f79f1f] underline decoration-white decoration-2'>e.</span></h1></Link>
                <div className='h-10 w-full my-2'>
                    <InputBox type={`number`} value={defaultAmount} onChange={(e) => setDefaultMount(e.target.value)} placeHolder={`Type The Amount`} />
                </div>
                <div className='flex items-center justify-between'>
                    <CurrencySelector selectedCurrency={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} />
                        <button onClick={exchangeBtn}><i className='fa-solid fa-exchange text-lg sm:text-xl hover:text-[#f79f1f] transition-all duration-500'></i></button>
                    <CurrencySelector selectedCurrency={toCurrency} onChange={(e) => setToCurrency(e.target.value)} />
                </div>
                <div className='my-2'>
                    <button onClick={getExchangeRate} className='h-10 w-full border-2 border-[#695cfe] rounded-lg text-md sm:text-lg text-center hover:bg-[#695cfe] transition-all duration-500'>Get Exchange Rate</button>
                </div>
                <div className='my-3'>
                    <p className='text-center text-lg sm:text-xl font-normal border-2 p-1 rounded-lg border-[#695cfe]'>{loading ? 'Getting Data' : result}</p>
                </div>
                <div className='my-4'>
                    <p className='text-left text-xs sm:text-sm'>&copy; Copyright 2024 All Rights Reserved <Link href="/" className='text-[#f79f1f]'>Muhammed Althaf N E</Link> | Licensed Under <Link href="/" className='text-[#f79f1f]'>GNU GPL v3.0</Link></p>
                    <p className='mt-2 text-md sm:text-lg'><Link href="/" className='hover:text-[#f79f1f] transition-all duration-500'><i className='fa-brands fa-github'></i> <span>View On Github</span></Link></p>
                </div>
            </div>
        </>
    )
}

export default ExchangeBox