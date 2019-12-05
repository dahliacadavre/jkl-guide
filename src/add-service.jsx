import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React from 'react';
import './site.scss';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Addservice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 25.7466,
            lat: 62.2373,
            zoom: 10.42,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoicHVua2thcmlkdWRlIiwiYSI6ImNrMjM2aGl2NTB0OHIzY25yb29oOXNlbmYifQ.-jVIXdpV1emEldkSzf-Q5g';
        this.map2 = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        this.map2.on('move', () => {
            this.setState({
            lng: this.map2.getCenter().lng.toFixed(4),
            lat: this.map2.getCenter().lat.toFixed(4),
            zoom: this.map2.getZoom().toFixed(2)
            })
        })
        this.map2.on('load', () => {
            this.map2.getCanvasContainer();
            this.map2.getCanvas();
        })
    }

    render() {
        return (
            <div id="addserviceWrapper" className="page d-flex justify-content-around flex-wrap">
                <div className="col-md-6">
                    <form className="">
                        <div>
                            <label className="col-form-label">Service name</label>
                            <input className="form-control" type='text'></input>
                        </div>
                        <div>
                            <label className="col-form-label">Address</label>
                            <input className="form-control" type='text'></input>
                        </div>
                        <div>
                            <label className="col-form-label">Email</label>
                            <input className="form-control" type='text'></input>
                        </div>
                        <div>
                            <label className="col-form-label">Phonenumber</label>
                            <input className="form-control" type='text'></input>
                        </div>  
                        <div>
                            <label className="col-form-label">Website</label>
                            <input className="form-control" type='text'></input>
                        </div>
                        <div>
                            <label className="col-form-label">Service details</label>
                            <textarea className="form-control" type='text'></textarea>
                        </div>
                        <button type="button" className="btn-lg">Upload image</button>
                    </form>  
                </div>
                <div className="col-md-6">
                    <div id="map" className="container-fluid px-0 rounded shadow mt-md-2 mt-0">
                        <div className='sidebarStyle'>
                            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                        </div>
                        <div ref={el => this.mapContainer = el} className="mapContainer"/>
                    </div>
                    <div>
                        <label className="col-form-label">Coordinates</label>
                        <div className="form-inline">
                            <input className="form-control" type='text' placeholder="Longitude"></input>
                            <input className="form-control" type='text' placeholder="Latitude"></input>
                        </div>
                    </div>
                    <button type="button" className="btn-lg">Submit</button>
                </div>
            </div>
        );
    }
}