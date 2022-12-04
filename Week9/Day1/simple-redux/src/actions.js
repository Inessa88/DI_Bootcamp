export const changePropOne = (value) => {
    return {
      type:'PROP_ONE',
      payload: value
    }
  }
  
  export const changePropTwoWithValue = (value) => {
    return {
      type:'PROP_TWO_WITH',
      payload:value
    }
  }
  
  export const changePropTwo = () => {
    return {
      type:'PROP_TWO',
    }
  }