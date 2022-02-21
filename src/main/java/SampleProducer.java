import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.common.serialization.StringSerializer;

import java.util.Properties;

public class SampleProducer {

    public static void main(String[] args) {

        Properties properties = new Properties();
        properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        final KafkaProducer<String,String> kafkaProducer = new KafkaProducer<String, String>(properties);

        for (int i=0; i<10; i++) {
            ProducerRecord<String, String> producerRecord =
                    new ProducerRecord<String, String>("sample-topic", "key"+Integer.toString(i), "value"+Integer.toString(i));
            kafkaProducer.send(producerRecord);
        }
        kafkaProducer.close();
    }

}