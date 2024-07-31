FROM python:3.12
COPY . /service-b
WORKDIR /service-b
RUN pip install Flask==3.0.2
EXPOSE 5000
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0:5000"]