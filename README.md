# FlyMate-Booking-Service

# docker build -t flymate-booking-service .                                             # Build the Image
# docker run -it --init -p 4000:4000 -v "$(pwd)":/app flymate-booking-service:latest    # start the build image

# docker volume create flymate-booking-service-node-modules                             # create a volume with a name (we are creating a volume to store node_modules)
# docker run -it --init -p 5000:5000 -v "$(pwd)":/app -v flymate-booking-service-node-modules:/app/flymate-booking-service/node_modules flymate-booking-service:latest                                                           # start the build image with volume with name

# docker run -it --init --name flymate_booking_service --network flymate -p 4000:4000 -v "$(pwd)":/app -v flymate-booking-service-node-modules:/app/flymate-booking-service/node_modules flymate-booking-service:latest