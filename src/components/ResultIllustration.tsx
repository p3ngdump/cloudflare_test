import * as React from 'react'
import tetoMale from '@/assets/illustrations/teto_male.png'
import tetoFemale from '@/assets/illustrations/teto_female.png'
import egenMale from '@/assets/illustrations/egen_male.png'
import egenFemale from '@/assets/illustrations/egen_female.png'
import neutralImg from '@/assets/illustrations/neutral.png'

export default function ResultIllustration({ side, gender }:{ side:'egen'|'teto'; gender:'male'|'female'|'none' }){
  let src = neutralImg
  if(side==='egen') src = gender==='female'? egenFemale : egenMale
  if(side==='teto') src = gender==='female'? tetoFemale : tetoMale
  return <img src={src} alt="result-illustration" className="w-full rounded-2xl border border-slate-200" />
}
