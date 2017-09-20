# Final Project: Photographer Portfolio Website

General Assembly WDI NYC
September, 2107

#### The Master Minds
- Asher Shaheen

## Description 
The project entails a portfolio website for a NYC Photographer. The website has two interfaces one for the _CLIENTS_ and the other for the _PHOTOGRAPHER_. A client has access to all of the photographer's work _(PICS)_, an option to view photographer's schedule based on his bookings and an option to create a _BOOKING_. Photographer has an option to _VIEW_ and _DELETE_ all of his _BOOKINGS_ and an option to upload his work _(PICS)_ to a cloud server and ability for his clients to view those uploads on his page. 

### User Stories
  *  User should be able to see the Bio page which includes all the content for the Photographer
  *  User should be able to _Register_
  *  User should be able to _Login_ after _Registering_
  *  User should be able to _Book_ an appointment
  *  Once an appointment is booked, Photographer should be able to receive an email notification stating that a User has booked an appoointment
  *  Photographer should be able to _Register_ & _Login_ and should be able to see his Calender
  *  Photographer should be able to confirm appointments on his calender
  *  Photographer & the client should be able to see all of the appointments on the calender
  *  Photographer should be able to upload his work(pics, videos) to rails DB [Source Here](http://ryan.endacott.me/2014/06/10/rails-file-upload.html)

  ### Sourced Technologies
  - [x] REACT: Frontend UI
  - [x] Rails: Used as an API to save all the content for the photographer
  - [x] Rails Action Mailer - For Email Handlings [Source Here](http://guides.rubyonrails.org/action_mailer_basics.html)
  - [x] Coudinary - To Store all the pics (references will be saved in Rails DB)
  - [x] Dropzone - For pics Uploads
  - [x] React Big Calendar - Display all bookings on a Calendar
  - [x] Moment & Moment-Duration-Format (Parsing Dates & Times received from API Response)
  - [x] MailGun - For email handlings / forwardings

  ## Code Snipets

<details>
<summary>Drop Zone - Image Uploads</summary>

```
<Dropzone
                accept="image/jpeg, image/png, image/jpg"
                onDrop={(files, reject) => this.uploadFile(files, reject)}>
                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                        return this.state.accept.length || this.state.reject.length
                            ? `Accepted ${this.state.accept.length}, rejected ${this.state.reject.length} files`
                            : "Drag a Pic or Click in the box to upload a picture";
                }}
                </Dropzone>
                {this.renderUploadedPic()}
                <aside>
                    <h3>Accepted files</h3>
                    <ul>
                        {
                        this.state.accept.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    <h3>Rejected files</h3>
                    <ul>
                        {
                        this.state.reject.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>

```

</details>