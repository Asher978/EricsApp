class UploadsController < ApiController

    def create
        upload = Upload.create!(upload_params)
        render json: { message: 'Image was uploaded successfully!', data: upload }        
    end

    def index
        upload = Upload.all 
        render json: { pics: upload }
    end

    private

    def upload_params
        params.require(:upload).permit(:pic)
    end


end
