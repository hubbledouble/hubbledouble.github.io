## Merge & Patch

*Java merge & patch implementation on JSON messages*  
*(Source code : [https://github.com/hubbledouble/json-merge-patch](https://github.com/hubbledouble/json-merge-patch))*   
*(Example code : [https://github.com/hubbledouble/json-merge-patch-example](https://github.com/hubbledouble/json-merge-patch-example))*
___
&nbsp;  
## Brief description
Java library to be used when there is a need to update a JSON message using partial data only. This uses reflection to make this possible and requires an object representation of the JSON message format. Below are a couple scenarios for using this library:     
&nbsp;  
&nbsp;  
##### **Example 1 - regular update**
A JSON message with 2 fields (name & description), but an update is needed to modify content of field "description": 

```json
1. Original message 
{
  "name": "hello world",
  "description": "Today is a good day"
}


2. Partial data
{
  "description": "Every day is awesome!"
}


3. Result
{
  "name": "hello world",
  "description": "Every day is awesome!"
}
```
&nbsp; 
&nbsp; 
&nbsp;  
##### **Example 2 - removing field**   
JSON message with 2 fields (name & description), but an update is needed to remove field "name": 

```json
1. Original message 
{
  "name": "hello world",
  "description": "Today is a good day"
}


2. Partial data
{
  "name": null
}


3. Result
{
  "description": "Today is a good day"
}
```
&nbsp; 
&nbsp; 
&nbsp;  
##### **Example 3 - adding field**   
JSON message with 1 field "name", but an update is add a field called "description": 
```json
1. Original message 
{
  "name": "hello world"
}


2. Partial data
{
  "description": "Today is a good day"
}


3. Result
{
  "name": "hello world",
  "description": "Today is a good day"
}
```
&nbsp; 
&nbsp; 
&nbsp;  
##### **Example 4 - changing data type**   
JSON message with 1 field "id" of data type number. An update is needed to update it's value with string data type:
```json
1. Original message 
{
  "id": 1
}


2. Partial data
{
  "id": "4175b663-c176-4813-98e4-9fe26196bfd7"
}


3. Result
{
  "id": "4175b663-c176-4813-98e4-9fe26196bfd7"
}
```
&nbsp; 
&nbsp; 
&nbsp;  
##### **Example 5 - updating arrays**   
JSON message with 1 field "ids". An update is needed to update it's value, but because the data type is of type array, the whole content will be updated:
```json
1. Original message 
{
  "id": [1,2,3,4,5]
}


2. Partial data
{
  "id": [1]
}


3. Result
{
  "id": [1]
}
```
___
&nbsp;  
&nbsp;  
&nbsp;  
#### Usage
The library provides a single point of entry for performing the update to the JSON message:  
*HTTPMethodProcessor#patch(String jsonRequest, T object)* where "jsonRequest" is the partial data in JSON string format and "object" is a the original message in JSON object format.
&nbsp;  
&nbsp;  
&nbsp;  
#### Import the library
First, you need to import the library using your favorite package manager (maven, gradle, etc) [Maven Repository](https://mvnrepository.com/artifact/com.hubbledouble/json-merge-patch/1.0.1) 
```xml
<!-- Example using maven -->
<dependency>
    <groupId>com.hubbledouble</groupId>
    <artifactId>json-merge-patch</artifactId>
    <version>1.0.1</version>
</dependency>
```
&nbsp;  
#### Code usage
Call "patch" method of the class "HTTPMethodProcessor" where the first parameter is the partial json message in String representation and the second parameter is the message to be updated in it's Object representation. The following, is an example of how it could be used on your code. Let's assume we have a method that receives 2 parameters. The first is the partial json data, while the second is an id. Using the id, your code goes to the database, then retrieves the object to be updated. Then, you call the library "patch" method to modify the content. The object is now updated, and is ready to be saved back to the database. 
```java
 public T executePartialUpdate(String partialJsonData, String id){
    T object = repository.findById(id);
    HTTPMethodProcessor.patch(json, object);
    repository.save(object);
 }
```