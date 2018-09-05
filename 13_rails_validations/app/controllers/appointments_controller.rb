class AppointmentsController < ApplicationController

  # I want someone to be able to create a new appointment
  # DONE I want them to also be able to see the newly created appointment

  def new
    @appointment = Appointment.new

    render :new
  end

  def create
    @appointment = Appointment.create(appointment_params)

    # redirect_to "/appointments/#{@appointment.id}"
    # redirect_to appointment_path(@appointment)
    if @appointment.valid?
      redirect_to @appointment
    else
      render :new
    end
  end

  def edit
    # GET /appointments/:id/edit
    @appointment = Appointment.find(params[:id])

    render :edit
  end

  def update
    # PATCH /appointments/:id
    # PUT /appointments/:id

    @appointment = Appointment.find(params[:id])

    @appointment.update(appointment_params)

    # redirect_to "/appointments/#{@appointment.id}"
    # redirect_to appointment_path(@appointment)
    redirect_to @appointment
  end


  def show
    # I am going to find an appointment by its id
    # GET /appointments/:id
    @appointment = Appointment.find(params[:id])
    render :show
  end

  private
  def appointment_params
    params.require(:appointment).permit(:date, :patient_id, :doctor_id)
  end









end
