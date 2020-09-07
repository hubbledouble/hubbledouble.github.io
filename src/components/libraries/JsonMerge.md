## Java JSON Merge patch implementation as per [RFC-7386](https://tools.ietf.org/html/rfc7386)

Java specification implementation

[https://github.com/hubbledouble/json-merge-patch](https://github.com/hubbledouble/json-merge-patch)

The library provides a single point of entry for patching an object:  
**HTTPMethodProcessor#patch(String jsonRequest, T object)** where "jsonRequest" is a partial json request and "object" is a the object to be patched.

#### Import the following library

<code>
   <dependency>
       <groupId>com.hubbledouble</groupId>
       <artifactId>json-merge-patch</artifactId>
       <version>1.0.1</version>
   </dependency>
</code>

### Java usage example

```java
 public T patch(String json, String pathParamId){
    T object = repository.findById(pathParamId);
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