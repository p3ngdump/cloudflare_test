import * as React from 'react'
import EgenMale from '@/illustrations/EgenMale'
import EgenFemale from '@/illustrations/EgenFemale'
import TetoMale from '@/illustrations/TetoMale'
import TetoFemale from '@/illustrations/TetoFemale'
import Neutral from '@/illustrations/Neutral'

export default function ResultIllustration({ lean, gender }:{ lean:'egen'|'teto'|'neutral'; gender:'male'|'female'|'none' }){
  if(lean==='egen') return gender==='female'? <EgenFemale/> : <EgenMale/>
  if(lean==='teto') return gender==='female'? <TetoFemale/> : <TetoMale/>
  return <Neutral/>
}
