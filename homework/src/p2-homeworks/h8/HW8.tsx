import React, {useState} from 'react'
import {checkAC, homeWorkReducer, SortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './bll/HW8.module.css'


export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name} {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortAC('down')))
    const check = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

    return (
        <div >
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
           <div className={s.container}>{finalPeople}</div>
            <div className={s.containerButton}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8