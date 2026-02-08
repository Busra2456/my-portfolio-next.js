
const CategoriesDetailsPage =async ({params}) => {
      const {features} = await params;
      // console.log({params})
      if(features.length == 3)
            return <div>{features[2]}</div>
      if(features.length == 2)
            return <div>{features[1]}</div>
     
      return (
            <div>
                 Categories Details 
            </div>
      );
};

export default CategoriesDetailsPage;