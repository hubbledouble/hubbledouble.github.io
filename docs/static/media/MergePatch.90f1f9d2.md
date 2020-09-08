## Merge & Patch

*Java merge & patch implementation on JSON messages*  
*(Source code : [https://github.com/hubbledouble/json-merge-patch](https://github.com/hubbledouble/json-merge-patch))*
___
&nbsp;  
## Brief description
Java library to be used when there is a need to update a JSON message using partial data only.  
&nbsp;  
&nbsp;  
##### **Example 1  **
Let's say we have a JSON message with 2 fields (name & description): 

```json
{
  "name": "hello world",
  "description": "Today is a good day"
}
```
&nbsp;    
And we would like to update the field "description" only. Instead of passing the 2 fields to perform the update, we pass only the field we want, in this case description:
```json
{
  "description": "Every day is awesome!"
}
```
&nbsp;  
The result should reflect only the field "description" updated:
```json
{
  "name": "hello world",
  "description": "Every day is awesome!"
}
```
&nbsp; 
&nbsp; 
&nbsp;  
##### **Example 2**   
Another example could be, let's say we have the same JSON message with 2 fields (name & description): 

```json
{
  "name": "hello world",
  "description": "Today is a good day"
}
```
&nbsp;    
And we would like to remove the field "name". We could send the field with "null" as a value without parenthesis. 
```json
{
  "name": null
}
```
&nbsp;  
The result should reflect the same description we started with, but no name:
```json
{
  "description": "Today is a good day"
}
```

___
&nbsp;  
&nbsp;  
&nbsp;  
## Usage
The library provides a single point of entry for performing the update to the JSON message:  
&nbsp;    
HTTPMethodProcessor#patch(String jsonRequest, T object) where "jsonRequest" is the partial data in JSON string format and "object" is a the original message in JSON object format to be updated.
&nbsp;  
&nbsp;  
&nbsp;  
#### Import the library
First, you need to import the library using your favorite package manager (maven, gradle, etc) [Maven Repository](https://mvnrepository.com/artifact/com.hubbledouble/json-merge-patch/1.0.1) 
```xml
   <dependency>
       <groupId>com.hubbledouble</groupId>
       <artifactId>json-merge-patch</artifactId>
       <version>1.0.1</version>
   </dependency>
```
&nbsp;  
&nbsp;  
#### Java usage example
Then, just call the "patch" method of the class "HTTPMethodProcessor". The first parameter is the JSON message with the partial data. The second parameter is the object representation of the message to be updated. The following example, is an idea of how it will look on your end. Let's assume we have a method that receives 2 parameters. The first is the partial json data, while the second is an id. Using the id, your code goes into the database, retrieves the object to be updated. Then, you update the object using the library "patch" method. The object is now updated, and is ready to be saved to the database. 
```java
 public T executePartialUpdate(String partialJsonData, String id){
    T object = repository.findById(id);
    HTTPMethodProcessor.patch(json, object);
    repository.save(object);
 }
```

---

## Data representation going through a merge patch update

### Sample data (Original state)

```json
{
  "object": "object",
  "string": "value",
  "integer": 1,
  "child_object": {
    "object": "other_object",
    "string": "other_value",
    "integer": 2
  }
}
```

---

### Sample patch request (only updating 2 fields of "child_object")

```json
{
  "child_object": {
    "object": 5,
    "string": "updated_value"
  }
}
```

---

### Updated object (Only 2 fields were updated)

```json
{
  "object": "object",
  "string": "value",
  "integer": 1,
  "child_object": {
    "object": 5,
    "string": "updated_value",
    "integer": 2
  }
}
```
