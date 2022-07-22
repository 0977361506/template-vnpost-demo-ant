/* eslint-disable react/button-has-type */
import React from 'react'
import { useSelector } from 'react-redux'
import TestProcessor from '../../processors/TestProcessor'

const Page1 = () => {
  const testProcessor = new TestProcessor()
  const contentRedux = useSelector((state) => state.GET_DATA)
  const changeReducer = () => {
    testProcessor.testApi()
  }
  // useEffect(() => {
  //   testProcessor.testApi();
  // }, []);
  return (
    <div>
      <button onClick={() => changeReducer()}>test</button>
      {contentRedux}
    </div>
  )
}

export default Page1
