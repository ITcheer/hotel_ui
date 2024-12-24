Page({
  data: {
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    roomType: '',
    bookingDetails: {}
  },

  onLoad: function(options) {
    // Initialize any data or settings when the page loads
  },

  onCheckInDateChange: function(e) {
    this.setData({
      checkInDate: e.detail.value
    });
  },

  onCheckOutDateChange: function(e) {
    this.setData({
      checkOutDate: e.detail.value
    });
  },

  onGuestsChange: function(e) {
    this.setData({
      numberOfGuests: e.detail.value
    });
  },

  onRoomTypeChange: function(e) {
    this.setData({
      roomType: e.detail.value
    });
  },

  submitBooking: function() {
    const { checkInDate, checkOutDate, numberOfGuests, roomType } = this.data;
    // Validate input and submit booking details
    if (checkInDate && checkOutDate && roomType) {
      this.setData({
        bookingDetails: {
          checkInDate,
          checkOutDate,
          numberOfGuests,
          roomType
        }
      });
      // Call API to submit booking
      wx.showToast({
        title: 'Booking submitted!',
        icon: 'success'
      });
    } else {
      wx.showToast({
        title: 'Please fill all fields',
        icon: 'none'
      });
    }
  }
});