import React from 'react';
import Header from './Header.jsx';
import TeamWriter from './TeamWriter.jsx';
import EssayWritingFeatures from './EssayWritingFeatures.jsx';
import LatestFeedback from './LatestFeedback.jsx';
import PaperWritingServices from './PaperWritingServices.jsx';
import WritingServicesWork from "./WritingServicesWork";
import FreqAskQuestions from './FreqAskQuestions.jsx';
import EssayWritingExp from './EssayWritingExp.jsx'
import StayAnonymus from './StayAnonymus.jsx';

const AllComp = ({data}) => {

  return (
    <div>
       < Header data={data}/>
        {/* <TeamWriter data={data}/> */}
        <EssayWritingFeatures data={data}/>
        <LatestFeedback data={data}/>
        <PaperWritingServices data={data}/>
        <WritingServicesWork data={data}/>
        <FreqAskQuestions/>
        <EssayWritingExp/>
        <StayAnonymus/>
    
    </div>
  )
}

export default AllComp;