import React from 'react';
class Properties extends React.Component {
  backupImages = ["https://image.novasol.com/pic/600/d50/d50160_main_01.jpg",
  "http://image.novasol.com/pic/600/dmr/dmr295_main_01.jpg",
  "https://image.novasol.com/pic/600/hge/hge069_main_01.jpg"
  ]

  render() {
    if (!this.props.properties) {
        return null;
    } 
    const properties = this.props.properties.map((property, index) => {
        let image = property.picture;
        if (!image) {
            image = (index % 3 === 0) ? this.backupImages[2] : 
                (index % 2 === 0) ? this.backupImages[1] : this.backupImages[0];
        }
        const propertyList = [];
        const keys = {
            "numberOfBedrooms": "bedrooms",
            "numberOfBathrooms": "bathrooms",
            "pricePerNight": "price"
        }
        const id = property.id;
        for (const [key, value] of Object.entries(property)) {
            if (key === "id" || key === "picture") { continue; }
            const propName = (keys[key]) ? keys[key] : key;
            propertyList.push(<li key={`${id}_${key}`} className={`propertyDetail_${key}`}><span className="key">{propName}:</span><span className="value">{value}</span></li>)
        }
        /*img alt empty string because I suppose for visually impaired user
          the image of the location is somewhat decorative, 
          it wouldn't be beneficial to have each image say "Image of location" at any rate.
        */
        return (<div className="property" key={`property_${id}`}>
            <div className="propertyImageHolder"><img src={image} className="propertyImage" alt=""/></div>
            <div className="PropertyDescriptionHolder">
                 <ul className="propertyDetails">{propertyList}</ul>
            </div>
        </div>)
    });

    return (<div className="properties">
      {properties}
    </div>);
  }

}

export default Properties;
