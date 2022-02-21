# Group-21 CMPE 272

## Team Members
- SaiLahari Seethamraju                   (016037112)
- Sai Manasa Yadlapalli                   (015999659)
- Mounika Reddy kandi                     (016021902)
- Satya Venkata Chandra Tej Ventrapragada (016085251)

## Kafka Assignment 

- Java application to produce and consume from the Kafka topic using the kafka-clients directory in thie repo.

#### Prerequisites
  - Docker, docker-compose, Kafka must be installed.
  - Launch Zookeeper on port: 2181, Kafka on port: 9092

#### Step 1: Run Producer
  - Producer writes 10 sample key: value pairs (key0: value0),  (key1: value1), ...(key9: value9) to Kafka topic - sample-topic <br>
   `javac SampleProducer.java`

#### Step 2: Run Consumer
  - Consumer retrives the key: value pairs written by the Producer.<br>
   `javac SampleConsumer.java`
