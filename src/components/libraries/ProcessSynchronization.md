## Process Synchronization

*Java process synchronization*  
*(Source code : [https://github.com/hubbledouble/thread-synchronization](https://github.com/hubbledouble/thread-synchronization))*  
*(Example code : [https://github.com/hubbledouble/thread-synchronization-example](https://github.com/hubbledouble/thread-synchronization-example))*
___
&nbsp;  
## Brief description
Ensures two or more concurrent thread processes be synchronized so they don't execute simultaneously critical code sections. Using this library makes it easy to focus on the business process than worrying about performing thread synchronization while executing the same process code in two or more distributed nodes.  
&nbsp;  
For more about thread synchronization, please visit [here](https://en.wikipedia.org/wiki/Synchronization_(computer_science)#Thread_or_process_synchronization)  
&nbsp;  
     
&nbsp;  
&nbsp;  
&nbsp;  
#### Usage
The library provides a single point of entry for performing the process synchroniation:  
*ThreadSynchronization#execute(String processName, RunnableCode runnableCode)*, where "processName" is the name of the process so it can be synchronized if other thread is trying to execute the same process at the same time and "runnableCode" which is a functional interface (Similar to Consumer) containing the logic of the process to be executed during the synchronized block.
&nbsp;  
&nbsp;  
&nbsp;  
#### Import the library
First, you need to import the library using your favorite package manager (maven, gradle, etc) [Maven Repository](https://mvnrepository.com/artifact/com.hubbledouble/thread-synchronization/1.0.0) 
```xml
<!-- Example using maven -->
<dependency>
	<groupId>com.hubbledouble</groupId>
	<artifactId>thread-synchronization</artifactId>
	<version>1.0.0</version>
</dependency>
```
  
&nbsp;  
External requirements:
- Mongo database (This library will write to it for synchronizing the processes, the collection name will be "hubbleDoubleProcess")
- Spring Mongo Data dependency (To pass the dependency needed by the library, which is "MongoOperations")
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```
  
&nbsp;  
Sample java code:  
(should be executed in 2 or more java process to see it in action)
```java
import com.hubbledouble.thread.synchronization.ThreadSynchronization;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;

public class Application {

    private static final ThreadSynchronization THREAD_SYNCHRONIZATION = threadSynchronization(mongoTemplate());

    public static MongoTemplate mongoTemplate() {

        MongoClient mongo = MongoClients.create();
        return new MongoTemplate(mongo, "databaseName");

    }

    public static ThreadSynchronization threadSynchronization(MongoOperations mongoOperations) {
        return new ThreadSynchronization(mongoOperations);
    }

    public static void main(String[] args) {

        THREAD_SYNCHRONIZATION.execute("processName", () ->
                System.out.println("Hello synchronized world!")
        );

    }

}
```
