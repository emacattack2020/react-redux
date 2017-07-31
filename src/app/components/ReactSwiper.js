import React from 'react';
import Swiper from 'react-id-swiper';
// https://github.com/kidjp85/react-id-swiper
// http://kidjp85.github.io/react-id-swiper/
// 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyDialog from "./MyDialog";
class ReactSwiper extends React.Component {

    render() {
        const params = {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          direction: "horizontal",
          spaceBetween: 30,
          slidesPerView: 3,
        }
        return (
            <Swiper {...params}>
              <div>
                <MuiThemeProvider>
                    <MyDialog/>
                </MuiThemeProvider>
              </div>
              <div>
                <MuiThemeProvider>
                    <MyDialog/>
                </MuiThemeProvider>
              </div>
              <div>
                <MuiThemeProvider>
                    <MyDialog/>
                </MuiThemeProvider>
              </div>
              <div>
                <MuiThemeProvider>
                    <MyDialog/>
                </MuiThemeProvider>
              </div>
              <div>
                <MuiThemeProvider>
                    <MyDialog/>
                </MuiThemeProvider>
              </div>
            </Swiper>
        );
    }
}

export default ReactSwiper;