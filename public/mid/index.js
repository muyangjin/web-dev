// import ul_func from "./ul_func.js";

let cb = [76,34,27,77,45];
let hq = [88,51,109,46];
let xe = [...cb, 9, 10, 11, hq]

console.log(xe)

let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}
console.log(gu.si)
console.log(uj.cf)
console.log(gu.co)

const ewq = ['qu','wf','eh','iu','tb']

console.log(
    <ul>
        {
            ewq.map(rew => {
                    return <li>{rew}</li>
                }
            )
        }
    </ul>
)

// console.log(ul_func(ewq))