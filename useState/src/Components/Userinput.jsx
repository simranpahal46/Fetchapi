import { useState } from 'react'

export default function Navbar() {
    const [value, setValue] = useState('Result')
    const [num, setNum] = useState(5)

    const star = () => {
        let bag = ''
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= num; j++) {
                bag += '* '
            }
            bag += '\n'
        }
        setValue(bag)
    }

    const number = () => {
        let bag = ''
        let c = 1
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= num; j++) {
                bag += c + ' '
                c++
            }
            bag += '\n'
        }
        setValue(bag)
    }

    // const alphabet = () => {
    //     let bag = ['A','b','c]
    //     for (let i = 1; i <= num; i++) {
    //         for (let j = 1; j <= num; j++) {
    //             bag += arr[j] + ' '
    //         }
    //         bag += '\n'
    //     }
    //     setValue(bag)
    // }

    const alphabet = () => {
    let bag = ''
    let charCode = 65 // A
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            bag += String.fromCharCode(charCode) + ' '
            charCode++
            // Start again from A after Z
            if (charCode > 90) {
                charCode = 65
            }
        }
        bag += '\n'
    }

    setValue(bag)
}


    return (
        <div className="flex flex-col gap-5 mt-10">
            <input className='border ml-50 mr-50'
                type="number"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
                placeholder="Enter a number..."
            />

            <button onClick={star}>Star Pattern</button>
            <button onClick={number}>Number Pattern</button>
            <button onClick={alphabet}>Alphabet Pattern</button>

            <div className='flex justify-center border-2 ml-60 mr-60'>
                <pre>{value}</pre>
            </div>
        </div>
    )
}